function teste(callback) {
    console.log('função teste');

    callback()
}

teste(function (){
    console.log("função de callback");// esse código está sendo executado na função teste em forma de callback
    // ou seja, esse código ou função é executado apenas quando passado pra função teste.
})
