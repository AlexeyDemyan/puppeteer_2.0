// const getData = () => {
//     fetch('http://127.0.0.1:8000/api/appids')
//         .then((response) => {
//             if (response.ok) {
//                 return response.json();
//             }
//             throw new Error(`${response.status} ${response.statusText}`);
//         })
//         .then((data) => { console.log(data); })
//         .catch((err) => { console.log(err); });
// };

// getData();

const createAppId = (appid: Number, index: Number, totalAmount: Number) => {
  fetch('http://127.0.0.1:8000/api/appids', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ appid: appid }),
  })
    .then((response) => {
      if (response.ok) {
        console.log(
          `Created Appid ${appid}. Progress: ${index} of ${totalAmount}`
        );
        return response.json();
      }
      throw new Error(`${response.status} ${response.statusText}`);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createAppIds = (appids: Number[]) => {
  appids.forEach((appid) =>
    createAppId(appid, appids.indexOf(appid), appids.length)
  );
};
