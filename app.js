const img = document.querySelector("img");
const button = document.querySelector("button");
const caption = document.querySelector("figcaption");

button.addEventListener("click", async () => {
	caption.innerHTML = "";
	const input = document.querySelector("input");
	if (input.value) {
		let data = await fetch(
			`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${input.value}`
		);
		data = await data.json();
		if (data && data.code !== 400) {
			//creating elements and adding them to DOM

			//heading
			const title = document.createElement("h1");
			title.innerText = data.title;
			caption.append(title);

			//changing src of the image
			img.src = data.url;
			console.log(data);

			//adding the explaination

			const para = document.createElement("p");
			para.innerText = data.explanation;
			caption.append(para);

			//adding copyright
			const h3 = document.createElement("h3");
			h3.innerHTML = "&copy;  " + data.copyright;
			caption.append(h3);
		}
	}
});
