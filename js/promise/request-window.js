async function run(idArray, max) {
    const pool = [];
    for (let i = 0; i < idArray.length; i++) {
        let promise = fetch(idArray[i]);
        promise.then((res) => {
            console.log(`id${res}的请求已经处理完毕,当前并发为${pool.length}`);
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