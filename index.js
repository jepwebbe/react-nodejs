import express from 'express';

const PORT = process.env.PORT || 3232;

const app = express();

app.use((req, res, next) => {
    res.status(404).send("Forkert! ")
})
/* app.get("/", (req, res) => {
    res.send('Hej verden!  ಠ__ಠ ');
}); */

app.get("/api", (req, res) => {
    res.json({ message: "Hilsen fra serveren"})
});

app.listen(PORT, () => {
    console.log(`Express kører på ${PORT}`);
  });