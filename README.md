# SSR `withFetch()` memory leakage repro

First, eecute `npm i`

## Prepare test with `ẁithFetch()` enabled:

Go to `./src/app/app.config.ts` and uncomment the line containing `provideHttpClient(withFetch())`

## Prepare test without `ẁithFetch()` enabled:

Go to `./src/app/app.config.ts` and remove the line containing `provideHttpClient(withFetch())` but add back `provideHttpClient()`

## Run the tests

1. execute a prod build and run the app with inspection enabled: `npm run serve-demo`
2. open Chrome with: `chrome://inspect/#devices`
3. create a snapshot
4. run `npm test`
5. afterward, create a snapshot
6. repeat step 4 and 5 several times in order to get enough data for analysis

Do at least 3 runs after the initial snapshot being created in order to get meaningful results in terms of increased memory allocation.

Search the snapshots for instances like:
- Document2
- core_NgZone
- R3Injector
- Timeout

The heap size of the snapshots will definitely be higher when using `ẁithFetch()` than without.
(even though heap size will grow no matter of using fetch or not, b.t.w. 🤔)

But overall, wit fetch there are always more instances created and not removed than without fetch.
Also, there will be thousands of `Timeout` instances when using `withFetch()`, which are referring to `node:internal/deps/undici/undici`.
