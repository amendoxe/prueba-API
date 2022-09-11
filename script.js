const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const doggos = document.getElementById("dog-target");

function addNewDoggo() {
	const promise = fetch(DOG_URL);
	promise
		.then(function (response) {
			const processingPromise = response.text();
			return processingPromise;
		})
		.then(function (processedResponse) {
			const dogObject = JSON.parse(processedResponse);
			const img = document.createElement("img");
			img.src = dogObject.message;
			img.alt = "Cute doggo";
			doggos.appendChild(img);
		});
}
document.getElementById("dog-btn").addEventListener("click", addNewDoggo);
const doggos2 = document.getElementById("dog-target2");

function addNewDoggo() {
	const promise = fetch(DOG_URL);
	promise
		.then(function (response) {
			const processingPromise = response.json(); // json instead of text
			return processingPromise;
		})
		.then(function (processedResponse) {
			// we get to skip this line since it'll already be an object
			// const dogObject = JSON.parse(processedResponse);

			const img = document.createElement("img");
			img.src = processedResponse.message;
			img.alt = "Cute doggo";
			doggos2.appendChild(img);
		});
}

document.getElementById("dog-btn2").addEventListener("click", addNewDoggo);
