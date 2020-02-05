import ora from 'ora';

console.log("Hello world 2")

const loader = ora().start("Starting loading")
setTimeout(() => {
  loader.text = 'Loading in progress';
  setTimeout(() => {
    loader.stopAndPersist({
      text: "Loading is finished"
    })
  }, 2000)
}, 2000);