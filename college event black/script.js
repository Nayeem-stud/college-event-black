const  APIlink = '';
const  img_path = '';
const  SEARCHAPI = '';

const main = document.getElementById('section');
const search = document.getElementById('query');

returnEvents(APIlink)
function returnEvents (url){
    fetch(url).then(res => res.json())
    .then(function(data)) {
        console.log(data.results);
        data.result.forEach(element => {
            const div = document.createElement('div');
        });
    }
}
