document.addEventListener('alpine:init', () => {
    Alpine.data('slider', () => ({
        currentIndex: 1,
        images: [
            'https://source.unsplash.com/1600x900/?beach',
            'https://source.unsplash.com/1600x900/?cat',
            'https://source.unsplash.com/1600x900/?dog',
            'https://source.unsplash.com/1600x900/?lego',
            'https://source.unsplash.com/1600x900/?textures&patterns'
        ],
        back() {
            if (this.currentIndex > 1) {
                this.currentIndex = this.currentIndex - 1;
            }
        },
        next() {
            if (this.currentIndex < this.images.length) {
                this.currentIndex = this.currentIndex + 1;
            } else if (this.currentIndex <= this.images.length) {
                this.currentIndex = this.images.length - this.currentIndex + 1
            }
        },
    }))
})
const currentPath = window.location.pathname;
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPath) {
        link.classList.add("text-yellow-500");
    }
});


function submitForm(event) {

    event.preventDefault();

    const form = document.querySelector('form');
    const email = document.getElementById('email').value;
    const nome = document.getElementById('nome').value;
    const telefono = document.getElementById('telefono').value;
    const commento = document.getElementById('commento').value;


    // Set the ID of your Google Form, go to your google form and click send, 
    //get the link option and copy the code, after pasting this link code below, compare it to the example provided:
    //Past your link here:
    //https://docs.google.com/forms/d/e/1FAIpQLSd1RoYrywDSwtOT11g9utrt7FsC4ZDOAaBasLeyUKMP5vtuIg/viewform?usp=sf_link

    //example code:
    //https://docs.google.com/forms/d/e/${formId}/viewform?usp=sf_link

    //compare your link with the example, yours will not have ${formId} but something else, copy that and paste in formId below '' :
    //example:  const formId = '1FAIpQLSd1RoYrywDSwtOT11g9utrt7FsC4ZDOAaBasLeyUKMP5vtuIg';

    const formId = '1FAIpQLSd1RoYrywDSwtOT11g9utrt7FsC4ZDOAaBasLeyUKMP5vtuIg';

    // Construct the URL of your Google Form with the form ID included
    const url = `https://docs.google.com/forms/d/e/${formId}/formResponse`;

    // Create a new URLSearchParams object to encode the form data
    const data = new URLSearchParams();

    // Add the form data to the URLSearchParams object using the entry. fields
    // Alternatively, you can add the form data using the name attributes of each field

    // To get these fieldnames you can request an email version of your google form and inspect the input elements to find the name instead such as name="emailAddress" or name='entry.634299123'.


    data.append('emailAddress', email);
    data.append('entry.2005620554', nome);
    data.append('entry.1166974658', telefono);
    data.append('entry.839337160', commento);

    console.log(data);
    // Do something with the email and message data

    // Send a POST request to the specified URL with the form data in the request body
    fetch(url, {
        method: 'POST',
        mode: 'no-cors', // Use no-cors mode to bypass CORS policy
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: data,
    })
        .then((response) => {

            // Log the response status code to the console
            console.log(response.status);
            console.log(response);

            // Show success message
            const successMessage = document.createElement('div');
            successMessage.innerHTML = '<p>Thank you for your comment, we will be in touch soon</p><button  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onclick="window.location.reload()">Send another message</button>';
            form.parentNode.replaceChild(successMessage, form);
        })
        .catch((error) => {
            // Log any errors to the console
            console.error(error);
        });
}



tailwind.config = {
    theme: {
        extend: {
            colors: {
                clifford: "#da373d",
            },
            backgroundImage: {
                'hero-lion': "url('./images/bg-img.JPG')",
            }
        },
    },
}









