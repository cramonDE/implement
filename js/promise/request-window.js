async function run(idArray, max) {
    const pool = [];
    for (const item of idArray) {
        let promise = fetch(item);
        promise.then((res) => {
            pool.splice(pool.indexOf(promise), 1);
        })
        pool.push(promise);
        //这里是重点，当满了就阻塞
        if (pool.length == max) {
            await Promise.race(pool);
        }
    }
}
run();