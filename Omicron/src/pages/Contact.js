import React from 'react'

function contact() {
    return (
        <div>
        <h1 className="mt-5 mb-5">İletişim</h1>
        <form action="/action_page.php">
            <div class="form-group">
            <label for="pwd">İsim</label>
            <input type="text" class="form-control" id="pwd" />
        </div>
        <div class="form-group">
            <label for="pwd">Soyisim</label>
            <input type="text" class="form-control" id="pwd" />
        </div>
        <div class="form-group">
            <label for="email">Email addresi:</label>
            <input type="email" class="form-control" id="email"/>
        </div>
        <div class="form-group">
            <label for="exampleFormControlTextarea1">Mesajınız</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button type="submit" class="btn btn-danger mb-5">Submit</button>
        </form>
        <div><iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d48158.15180344985!2d28.937254238182238!3d41.027783051117446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x14cab9b153f60e9d%3A0x1609c6e2b7154d9f!2zxLBCQiBaZW1pbiDEsHN0YW5idWwsIMWeYWhrdWx1LCDFnmnFn2hhbmUgTWV0cm8gRHVyYcSfxLEsIE1lxZ9ydXRpeWV0IENkLiBObzoxMjUsIDM0NDIxIEJleW_En2x1L8Swc3RhbmJ1bA!3m2!1d41.0277236!2d28.972273599999998!5e0!3m2!1str!2str!4v1609002042784!5m2!1str!2str" width="600" height="250" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe></div>
        </div>
    )
}

export default contact
