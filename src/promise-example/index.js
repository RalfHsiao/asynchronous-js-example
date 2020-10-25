const mockAjaxSuccess = () => Promise.resolve();
const mockAjaxFailed = () => Promise.reject();

const resolve = () => { console.log('resolve') };
const reject = () => { console.log('reject') };

//then
mockAjaxSuccess()
    .then(resolve, reject);


//then的reslove function，如果發生exception，會被轉換成Promise.reject()
mockAjaxSuccess()
    .then(() => { throw 'Exception' })
    .then(resolve, reject);