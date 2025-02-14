import { faker } from '@faker-js/faker';

export const users = Array.from({ length: 20 }, () => {
    return {
        id: faker.string.uuid(),
        counterPartId: faker.string.uuid(),
        name: faker.internet.displayName(),
        description: faker.lorem.sentence(),
        imageUrl: faker.image.url(),
        startDate: faker.date.past(),
        endDate: faker.date.future(),
        status: faker.helpers.arrayElement(['pending', 'approved', 'inprogress', 'finished']),
        randomMethod: faker.helpers.arrayElement(['ChainLink', 'UniSwap', 'Uniswap-Nonce Number']),
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent(),
    };
});
