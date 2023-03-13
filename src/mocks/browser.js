import { setupWorker, rest } from 'msw';

const worker = setupWorker(
  rest.get('/api/oil', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 1,
          date: '1/1/2023',
          extractOil: 20.4564,
          extractLiquids: 24.54768
        },
        {
          id: 2,
          date: '1/2/2023',
          extractOil: 30.23,
          extractLiquids: 36.276
        },
        {
          id: 3,
          date: '1/3/2023',
          extractOil: 35.28382948,
          extractLiquids: 42.34059538
        },
        {
          id: 4,
          date: '1/4/2023',
          extractOil: 46,
          extractLiquids: 55.2
        },
        {
          id: 5,
          date: '1/5/2023',
          extractOil: 53.41371474,
          extractLiquids: 64.09645769
        },
        {
          id: 6,
          date: '1/6/2023',
          extractOil: 61.58217769,
          extractLiquids: 73.89861323
        },
        {
          id: 7,
          date: '1/7/2023',
          extractOil: 69.75064064,
          extractLiquids: 83.70076877
        },
        {
          id: 8,
          date: '1/8/2023',
          extractOil: 77.91910359,
          extractLiquids: 93.5029243
        },
        {
          id: 9,
          date: '1/9/2023',
          extractOil: 86.08756653,
          extractLiquids: 103.3050798
        },
        {
          id: 10,
          date: '1/10/2023',
          extractOil: 94.25602948,
          extractLiquids: 113.1072354
        },
        {
          id: 11,
          date: '1/11/2023',
          extractOil: 102.4244924,
          extractLiquids: 122.9093909
        },
        {
          id: 12,
          date: '1/12/2023',
          extractOil: 110.5929554,
          extractLiquids: 132.7115465
        },
        {
          id: 13,
          date: '1/13/2023',
          extractOil: 118.7614183,
          extractLiquids: 142.513702
        },
        {
          id: 14,
          date: '1/14/2023',
          extractOil: 126.9298813,
          extractLiquids: 152.3158575
        },
        {
          id: 15,
          date: '1/15/2023',
          extractOil: 135.0983442,
          extractLiquids: 162.1180131
        },
        {
          id: 16,
          date: '1/16/2023',
          extractOil: 143.2668072,
          extractLiquids: 171.9201686
        },
        {
          id: 17,
          date: '1/17/2023',
          extractOil: 151.4352701,
          extractLiquids: 181.7223241
        },
        {
          id: 18,
          date: '1/18/2023',
          extractOil: 159.6037331,
          extractLiquids: 191.5244797
        },
        {
          id: 19,
          date: '1/19/2023',
          extractOil: 167.772196,
          extractLiquids: 201.3266352
        },
        {
          id: 20,
          date: '1/20/2023',
          extractOil: 175.940659,
          extractLiquids: 211.1287908
        },
        {
          id: 21,
          date: '1/21/2023',
          extractOil: 184.1091219,
          extractLiquids: 220.9309463
        },
        {
          id: 22,
          date: '1/22/2023',
          extractOil: 192.2775849,
          extractLiquids: 230.7331018
        },
        {
          id: 23,
          date: '1/23/2023',
          extractOil: 200.4460478,
          extractLiquids: 240.5352574
        },
        {
          id: 24,
          date: '1/24/2023',
          extractOil: 208.6145108,
          extractLiquids: 250.3374129
        },
        {
          id: 25,
          date: '1/25/2023',
          extractOil: 216.7829737,
          extractLiquids: 260.1395684
        },
        {
          id: 26,
          date: '1/26/2023',
          extractOil: 224.9514367,
          extractLiquids: 269.941724
        },
        {
          id: 27,
          date: '1/27/2023',
          extractOil: 233.1198996,
          extractLiquids: 279.7438795
        },
        {
          id: 28,
          date: '1/28/2023',
          extractOil: 241.2883626,
          extractLiquids: 289.5460351
        },
        {
          id: 29,
          date: '1/29/2023',
          extractOil: 249.4568255,
          extractLiquids: 299.3481906
        },
        {
          id: 30,
          date: '1/30/2023',
          extractOil: 257.6252884,
          extractLiquids: 309.1503461
        },
        {
          id: 31,
          date: '1/31/2023',
          extractOil: 265.7937514,
          extractLiquids: 318.9525017
        }
      ])
    );
  })
);

worker.start();
