const posts=[
  {title:'Post One',body:'this is post one'},
  {title:'Post two',body:'this is post two'}
];
function updateLastUserActivityTime(){
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
  var today = new Date;
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  console.log(time)

    },1000)
  })
}


function getPosts(){
  setTimeout( ()=>{
    let output = '';
    posts.forEach((post,index)=>{
      output+=`<li>${post.title}</li>`;

    });
    document.body.innerHTML = output;
  },1000)
}
 function createPost(post){
  return new Promise((resolve,rejected)=>{
setTimeout(()=>{
  posts.push(post);
  const error = false;
  if(!error){
    document.body.innerHTML = post.title;
    resolve();
  }
  else{
    rejected("error something is wrong" )
     
  }
},2000)
  });
 }








Promise.all([createPost({title: 'Post Five', body: 'This is Post Five'}), updateLastUserActivityTime(),getPosts()])