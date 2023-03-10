let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');

let song=[
    {songName:"salam-e-ishq",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"salam-e-ishq",filePath:"song/2.mp3",coverPath:"covers/2.jpg"},
    {songName:"salam-e-ishq",filePath:"song/3.mp3",coverPath:"covers/3.jpg"},
    {songName:"salam-e-ishq",filePath:"song/4.mp3",coverPath:"covers/4.jpg"},
    {songName:"salam-e-ishq",filePath:"song/5.mp3",coverPath:"covers/5.jpg"},
    {songName:"salam-e-ishq",filePath:"song/6.mp3",coverPath:"covers/6.jpg"},
    {songName:"salam-e-ishq",filePath:"song/7.mp3",coverPath:"covers/7.jpg"},
    {songName:"salam-e-ishq",filePath:"song/8.mp3",coverPath:"covers/8.jpg"},
]
masterPlay.addEventListener('click',()=>
{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }

})


audioElement.addEventListener('timeupdate',()=>
{
    console.log('timeupadate');
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>
{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause'); 
        element.classList.add('fa-circle-play');
})
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeAllPlays();
         songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`songs/${songIndex}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex >= 7){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`songs/${songIndex}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex <=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`songs/${songIndex}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})