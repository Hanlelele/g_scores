const Score = require("../models/score");
const catchAsync = require("../utils/CatchAsync");

const scoreController = {
  getDetailScore: catchAsync(async (req, res, next) => {
    try {
      const { sbd } = req.params;

      console.log("sbd", sbd);

      //const data = await Score.findOne({ sbd: sbd}).
      const data1 = await Score.find();

      console.log("data", data1);	

    } catch (error) {
      // console.error("Error fetching detail movie:", error);
      // return new InternalServerErrorResponse(
      //   `Error fetching movie detail: ${error.message}`
      // );
    }
  }),

  // getTrendingMoviesDay: catchAsync(async (req, res, next) => {
  //   try {
  //     const data = await MovieTrendingDay.find().limit(15);
  //     return res.status(200).json({
  //       success: true,
  //       message: "Trending movies day fetched successfully",
  //       data: data,
  //     });
  //   } catch (error) {
  //     console.error("Error fetching trending movies:", error);
  //     return new InternalServerErrorResponse(
  //       `Error fetching trending movies: ${error.message}`
  //     );
  //   }
  // }),

  // getTrendingMoviesWeek: catchAsync(async (req, res, next) => {
  //   try {
  //     const data = await MovieTrendingWeek.find().limit(15);
  //     return res.status(200).json({
  //       success: true,
  //       message: "Trending movies week fetched successfully",
  //       data: data,
  //     });
  //   } catch (error) {
  //     console.error("Error fetching trending movies:", error);
  //     return new InternalServerErrorResponse(
  //       `Error fetching trending movies: ${error.message}`
  //     );
  //   }
  // }),

  // getAllGenres: catchAsync(async (req, res, next) => {
  //   try {
  //     const genres = await Genre.find();
  //     //console.log("genres", genres);

  //     res.status(200).json({
  //       success: true,
  //       message: "Get All genres successfully",
  //       data: genres,
  //     });
  //   } catch (error) {
  //     console.error("Error fetching genres:", error);
  //     return new InternalServerErrorResponse(
  //       `Error fetching genres: ${error.message}`
  //     );
  //   }
  // }),
};

module.exports = scoreController;
