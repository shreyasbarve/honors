import express from "express";
import fs from "fs";

const router = express.Router();

var id = 0;

function myRead() {
  return fs.readFileSync("./data.json", { encoding: "utf8" });
}

function myWrite(data) {
  fs.writeFileSync("./data.json", JSON.stringify(data));
}

router.get("/", (req, res) => {
  try {
    var fileData = myRead();
    if (fileData.length === 0 || fileData === undefined) {
      res.status(200).send([]);
    } else {
      var data = JSON.parse(fileData);
      res.status(200).send(data);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/", (req, res) => {
  var data = req.body;
  try {
    var fileData = myRead();
    // first time writing in file
    if (fileData.length === 0) {
      var stored = [];
      data["uid"] = id;
      stored.push(data);
      try {
        myWrite(stored);
        res.status(200).send("OK");
      } catch (error) {
        res.status(500).send(error.message);
      }
    } else {
      var stored = JSON.parse(fileData);
      id = id + 1;
      data["uid"] = id;
      stored.push(data);
      try {
        myWrite(stored);
        res.status(200).send("OK");
      } catch (error) {
        res.status(500).send(error.message);
      }
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get("/details", (req, res) => {
  var uid = JSON.parse(req.query.uid);
  try {
    var fileData = myRead();
    if (fileData.length === 0) {
      res.status(404).send(error.message);
    } else {
      var data = JSON.parse(fileData);
      var found = data.find((element) => element.uid === uid);
      if (found !== undefined) {
        res.status(200).send(found);
      } else {
        res.status(404).send(error.message);
      }
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.delete("/", (req, res) => {
  var uid = JSON.parse(req.query.uid);
  try {
    var fileData = myRead();
    if (fileData.length === 0) {
      res.status(404).send(error.message);
    } else {
      var data = JSON.parse(fileData);
      var newData = data.filter((item) => item.uid !== uid);
      try {
        myWrite(newData);
        res.status(200).send("OK");
      } catch (error) {
        res.status(500).send(error.message);
      }
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.patch("/", (req, res) => {
  var uid = JSON.parse(req.query.uid);
  var updatedData = req.body;
  updatedData["uid"] = uid;
  try {
    var fileData = myRead();
    if (fileData.length === 0) {
      res.status(404).send(error.message);
    } else {
      var data = JSON.parse(fileData);
      var index = data.findIndex((element) => element.uid === uid);
      if (index !== -1) {
        data.splice(index, 1, updatedData);
        try {
          myWrite(data);
          res.status(200).send("OK");
        } catch (error) {
          res.status(500).send(error.message);
        }
      } else {
        res.status(404).send(error.message);
      }
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

export default router;
