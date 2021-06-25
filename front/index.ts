const buttonClick = async () => {
    const response = await fetch("/asd", {
        method: "GET",
        // body: "is mesage text",
    });
    const text = await response.text();
    console.log(text);
};
