import habits from './habits';

async function fetchUser() {
  return new Promise((resolve, reject) => {
    setTimeout(
      () =>
        resolve({
          email: 'a@a.com',
          token: 'Fkrrz48iZUCsM4cqJMyQzK9uq3R3iEWY',
        }),
      1000
    );
  });
}

async function fetchHabits() {
  return new Promise((resolve, reject) => {
    setTimeout(
      () =>
        resolve({
          habits,
        }),
      1000
    );
  });
}

export { fetchUser, fetchHabits };
