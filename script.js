console.log('Welcome to spotify')

let songindex=0;
let audioelement=new Audio('songs/1.mp3');
let masterplay=document.getElementById('masterplay');
let myprogressbar=document.getElementById('myprogressbar');
let gif=document.getElementById('gif');
let songitems=Array.from(document.getElementsByClassName('songitem'))
let mastersongname= document.getElementById('mastersongname');


let songs=[
    {songname: "Porkandra Singham EDM-Version", filepath: "songs/1.mp3", coverpath:"songcovers/1.jpg"},
    {songname: "Vikram Vedha", filepath: "songs/2.mp3", coverpath:"songcovers/2.jpg"},
    {songname: "3", filepath: "songs/3.mp3", coverpath:"songcovers/3.jpg"},
    {songname: "Gali Valuga", filepath: "songs/4.mp3", coverpath:"songcovers/4.jpg"},
    {songname: "Adhento Gaani Unnapatuga", filepath: "songs/5.mp3", coverpath:"songcovers/5.jpg"},
    {songname: "Vikram-Once Upon a time", filepath: "songs/6.mp3", coverpath:"songcovers/6.jpg"},
    {songname: "Megham Karukatha", filepath: "songs/7.mp3", coverpath:"songcovers/7.jpg"},
    {songname: "The Karma Theme", filepath: "songs/8.mp3", coverpath:"songcovers/8.jpg"}
]

songitems.forEach((element,i)=>{
    //console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText=songs[i].songname;
})

masterplay.addEventListener('click', ()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioelement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity=0;
        //gif.src=songs[songindex].coverpath;
    }
})

audioelement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress= parseInt((audioelement.currentTime/audioelement.duration)*100);
    //console.log(progress);
    myprogressbar.value=progress;
})

myprogressbar.addEventListener('change',()=>{
    audioelement.currentTime= audioelement.duration*myprogressbar.value/100;
})

const makeallplays=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeallplays();
        console.log(e.target);
        songindex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioelement.src = `songs/${songindex+1}.mp3`;
        mastersongname.innerText= songs[songindex].songname;
        audioelement.currentTime=0;
        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    })
})

document.getElementById('previous').addEventListener(('click'),()=>{
    if(songindex<=0){
        songindex=0;
    }else {
        songindex-=1;
    }
    audioelement.src = `songs/${songindex+1}.mp3`;
    mastersongname.innerText= songs[songindex].songname;
    audioelement.currentTime=0;
    audioelement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})
document.getElementById('next').addEventListener(('click'),()=>{
    if(songindex>=7){
        songindex=0;
    }else {
        songindex+=1;
    }
    audioelement.src = `songs/${songindex+1}.mp3`;
    mastersongname.innerText= songs[songindex].songname;
    audioelement.currentTime=0;
    audioelement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})