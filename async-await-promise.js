function addNumbers() {
  let p = new Promise((resolve, reject) => {
    let a = 1 + 1 // change this to see effect
    if (a == 2) {
      resolve('Success')
    } else {
      reject('Failed')
    }
  })
  return p
}

async function doWork() {
	try {
  	const response = await addNumbers()
    console.log('Numbers Added: ' + response)
  } catch (err) {
  	console.log(err)
  }
}
/*
function doWork() {
	const response = addNumbers()
  console.log('Numbers Added: ' + response)
}
*/
doWork()
