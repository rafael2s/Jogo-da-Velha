$(document).ready(function(){
    $('#staticBackdrop').modal('show');

    $('#botao_start').click(function(){
        capturaDadosPlayers();
    })
});

function capturaDadosPlayers() {
    let playerOne = $('input[name="input_player_one"]').val();
    let playerTwo = $('input[name="input_player_two"]').val();

    let startJogo = true;

    if(playerOne == ''){
        alert("Preencha o campo do primeiro player");
        startJogo = false;
    }else if(playerTwo == ''){
        alert("Preencha o campo do segundo player");
        startJogo = false;
    }else{
        $('#staticBackdrop').modal('hide');
        preencheNomePlayer();
        $('#jogo').show('slow');
    }

}

function preencheNomePlayer(){
    let playerOne = $("input[name='input_player_one']").val();
    let playerTwo = $("input[name='input_player_two']").val();

    $("#span_player_one").html(playerOne);
    $("#span_player_two").html(playerTwo);
}



