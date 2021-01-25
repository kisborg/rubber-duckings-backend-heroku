/* eslint-disable no-console */
import moment from 'moment';
import { challengeService } from './src/services/challenge.service';
import { registerService } from './src/services/register.service';
import { commitmentsService } from './src/services/commitments.service';

const createFakeDB = async () => {
  await registerService.insertNewUser('admin', 'password', 'admin@email.com', true);
  const user = await registerService.insertNewUser('kisborg', 'password', 'kisborg@gmail.com');
  const { userId } = user;
  const numOfDays = 15;

  const challengeStartDate = moment(new Date()).format('YYYY-MM-DD');
  const challengeEndDate = moment(new Date()).add(numOfDays, 'd').format('YYYY-MM-DD');
  const challengeName = 'Test challenge';
  const challengeDescription = `Test your strength for ${numOfDays} days. Workout as many times as you can.`;
  const minCommit = 8;

  await challengeService.postChallenge({
    startDate: challengeStartDate,
    endDate: challengeEndDate,
    challengeName,
    challengeDescription,
    minCommit,
  });

  const commitments = [
    {
      userId,
      name: 'Run',
      startDate: moment(new Date()).format('YYYY-MM-DD'),
      endDate: moment(new Date()).add(1, 'd').format('YYYY-MM-DD'),
    },
    {
      userId,
      name: 'Run',
      startDate: moment(new Date()).add(3, 'd').format('YYYY-MM-DD'),
      endDate: moment(new Date()).add(4, 'd').format('YYYY-MM-DD'),
    },
    {
      userId,
      name: 'Run',
      startDate: moment(new Date()).add(7, 'd').format('YYYY-MM-DD'),
      endDate: moment(new Date()).add(8, 'd').format('YYYY-MM-DD'),
    },
    {
      userId,
      name: 'Swim',
      startDate: new Date(),
      endDate: moment(new Date()).add(2, 'd').format('YYYY-MM-DD'),
    },
    {
      userId,
      name: 'Swim',
      startDate: moment(new Date()).add(4, 'd').format('YYYY-MM-DD'),
      endDate: moment(new Date()).add(6, 'd').format('YYYY-MM-DD'),
    },
    {
      userId,
      name: 'Swim',
      startDate: moment(new Date()).add(8, 'd').format('YYYY-MM-DD'),
      endDate: moment(new Date()).add(10, 'd').format('YYYY-MM-DD'),
    },
    {
      userId,
      name: 'Workout',
      startDate: moment(new Date()).add(4, 'd').format('YYYY-MM-DD'),
      endDate: moment(new Date()).add(8, 'd').format('YYYY-MM-DD'),
    },
    {
      userId,
      name: 'Workout',
      startDate: moment(new Date()).add(11, 'd').format('YYYY-MM-DD'),
      endDate: moment(new Date()).add(15, 'd').format('YYYY-MM-DD'),
    },
  ];
  await Promise.all(
    commitments.map(async (commitment) => {
      await commitmentsService.addCommitment(commitment);
    }),
  );
};

createFakeDB()
  .then(() => {
    console.log('Populated db with test data');
    process.exit(0);
  })
  .catch((err) => {
    console.log('Comething went wrong', err.message);
    process.exit(1);
  });
