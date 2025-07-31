import express from "express";
let posts= [];
let nextId=1;
const port = 3000;
const app=express();
var title1;

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("home.ejs",{posts:posts});
})
app.get("/create",(req,res)=>{
    title1=req.query.title;
    if(title1!=null){
    res.render("edit.ejs",{title : title1,
        post:null,
    });
    }
    else{
        res.send("enter title");
    }
});
app.get("/about",(req,res)=>{
    res.render("About.ejs");
});

app.post("/edit/:id",(req,res)=>{
    const postId = parseInt(req.params.id);
    const post = posts.find(p => p.id === postId);

    if (!post) {
        return res.status(404).send("Post not found");
    }

    post.content = req.body.content;
    console.log(`Post ${postId} updated:`, post);

    res.redirect("/");
});

app.get("/edit/:id",(req,res)=>{
    const postId = parseInt(req.params.id);
    const post = posts.find(p => p.id === postId);
    const cont=post.content;

    if(!post){
        return res.status(404).send('Post not found');
    }

    res.render("edit.ejs", { post, title: post.title,content:cont });
});
app.post("/publish",(req,res)=>{
     console.log("Publish route hitted");
    const newPost={
        id: nextId++,
        title: title1,
        content: req.body.content
    };
    posts.push(newPost);
    console.log(posts);
    res.redirect("/");
});
app.post("/delete/:id",(req,res)=>{
    const postId=parseInt(req.params.id);
    posts = posts.filter(p => p.id !== postId);
    console.log(`post ${postId} deleted`)
    res.redirect("/");
});
app.get("/get/view/:id",(req,res)=>{
  const postId = parseInt(req.params.id);
  const post = posts.find(p => p.id === postId);

  if (!post) {
    return res.status(404).send("Post not found");
  }

  res.render("post.ejs", { post: post });
});
app.listen(port,()=>{
    console.log(`server is listening on port ${port}`);
})