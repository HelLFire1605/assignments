const express = require("express");
const app = express();
const zod = require("zod");
app.use(express.json());

const schema = zod.array(zod.number());
const schema2 = zod.object({
    email : zod.string().email(),
    password : zod.string().min(8),
    captcha : zod.number().or(zod.string())
})
app.post("/health-checkup", (req, res) => {
  const obj = req.body;
    
  const response = schema2.safeParse(obj);
  
  console.log(response)
  res.json({
    response
  })
});

app.listen(3000);