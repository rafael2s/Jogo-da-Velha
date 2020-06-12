$(document).ready(function(){
    $('#staticBackdrop').modal('show');
    // $('#resultadoJogo').modal('show');

    $('#botao_start').click(function(){
        capturaDadosPlayers();
    })

    $("td").click(function() {
        if ($(this).html() == ""){
            preencheColuna(this);
        }
    })

    $("#botao_player_one_win").click(function() {
        adicionaValorScore("One");
    })

    $("#botao_player_two_win").click(function() {
        adicionaValorScore("Two");
    })

    $("#botao_player_draw").click(function() {
        adicionaValorScore("draw");
    })

    $('#resultadoJogo').on('show.bs.modal', function (event) {
        numeroRodadas = 0;
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

    $("#span_player_one, #botao_player_one_win").html(playerOne + " ");
    $("#span_player_two, #botao_player_two_win").html(playerTwo + " ");
}

let ultimaJogada = "";
let numeroRodadas = 0;

function preencheColuna(coluna) {
    let jogadaAtual;

    if(ultimaJogada == ""){
        jogadaAtual = "X";
    }
    if(ultimaJogada == "O"){
        jogadaAtual = "X";
    }
    if(ultimaJogada == "X"){
        jogadaAtual = "O";
    }
    ultimaJogada = jogadaAtual;

    $(coluna).html(jogadaAtual);

    console.log(jogadaAtual);

    numeroRodadas = numeroRodadas + 1;

    if (numeroRodadas == 9) {
        $('#resultadoJogo').modal('show');
    }
}

let scorePlayerOne = 0;
let scorePlayerTwo = 0;

function adicionaValorScore(winner) {
    if (winner == "One") {
        scorePlayerOne = scorePlayerOne + 1;
    }

    if (winner == "Two") {
        scorePlayerTwo = scorePlayerTwo + 1;
    }

    

    $("#span_player_one_score").html(scorePlayerOne);
    $("#span_player_two_score").html(scorePlayerTwo);

    $('#resultadoJogo').modal('hide');

    $("td").html("");
}

