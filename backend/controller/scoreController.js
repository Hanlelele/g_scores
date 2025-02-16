const Score = require("../models/score");
const catchAsync = require("../utils/CatchAsync");

const scoreController = {
  getDetailScore: catchAsync(async (req, res, next) => {
    try {
      const { registration_Number } = req.query;

      const data = await Score.findOne({ registration_Number: registration_Number});

      return res.status(200).json({
        success: true,
        message: "Detail score fetched successfully",
        data: data,
      });

    } catch (error) {
      return new InternalServerErrorResponse(
        `Error fetching Detail Score: ${error.message}`
      );
    }
  }),

  getScoreStatistics: catchAsync(async (req, res, next) => {
    try {
      const { subject } = req.query;

      const statistics = await Score.aggregate([
        {
          $match: {
            [subject]: { $ne: null } 
          }
        },
        {
          $project: {
            _id: 0,
            score: `$${subject}`,
          },
        },
        {
          $group: {
            _id: {
              range: {
                $switch: {
                  branches: [
                    { case: { $gte: ["$score", 8] }, then: "Excellent" },
                    {
                      case: {
                        $and: [
                          { $lt: ["$score", 8] },
                          { $gte: ["$score", 6] },
                        ],
                      },
                      then: "Good",
                    },
                    {
                      case: {
                        $and: [
                          { $lt: ["$score", 6] },
                          { $gte: ["$score", 4] },
                        ],
                      },
                      then: "Average",
                    },
                  ],
                  default: "Poor",
                },
              },
            },
            count: { $sum: 1 },
          },
        },
        {
          $group: {
            _id: null,
            scoreDistribution: {
              $push: {
                name: "$_id.range",
                count: "$count",
              },
            },
          },
        },
        { $project: { _id: 0 } },
      ]);
  
      const data = statistics.length > 0 ? statistics[0] : { scoreDistribution: [] };

      return res.status(200).json({
        success: true,
        message: "Score statistics fetched successfully",
        data: data,
      });
    } catch (error) {
      console.error("Error fetching score statistics:", error);
      return next(new InternalServerErrorResponse(`Error fetching score statistics: ${error.message}`));
    }
  }),

  getTop10ofGroupA: catchAsync(async (req, res, next) => {
    try {
      const topStudents = await Score.aggregate([
        {
          $project: {
            registration_Number: 1,
            math: 1,
            physics: 1,
            chemistry: 1,
            totalScore: { $add: ["$math", "$physics", "$chemistry"] },
          },
        },
        { $sort: { totalScore: -1 } }, 
        { $limit: 10 }, 
      ]);
  
      return res.status(200).json(
        {
          success: true,
          message: "Top 10 students of group A fetched successfully",
          data: topStudents,
        }
      );
    } catch (error) {
      console.error("Error fetching top students:", error);
      return next(new InternalServerErrorResponse(`Error fetching top students: ${error.message}`));
    }
  }),

  getAverageScoreBySubject: catchAsync(async (req, res, next) => {
    try {
      const averageScores = await Score.aggregate([
        {
          $group: {
            _id: null,
            avgMath: { $avg: "$math" },
            avgLiterature: { $avg: "$literature" },
            avgEnglish: { $avg: "$english" },
            avgCivicEducation: { $avg: "$civic_education" },
          },
        },
        {
          $project: {
            _id: 0,
            math: { $round: ["$avgMath", 2] },
            literature: { $round: ["$avgLiterature", 2] },
            english: { $round: ["$avgEnglish", 2] },
            civic_education: { $round: ["$avgCivicEducation", 2] },
          },
        },
      ]);
  
      return res.status(200).json({
        success: true,
        message: "Average scores fetched successfully",
        data: averageScores.length > 0 ? averageScores[0] : {},
      });

    } catch (error) {
      console.error("Error calculating average scores:", error);
      return next(
        new InternalServerErrorResponse(
          `Error calculating average scores: ${error.message}`
        )
      );
    }
  })
};

module.exports = scoreController;
