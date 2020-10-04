$(function () {
  var content1Top =$(".content1").offset().top -50;
  var content1But =$(".content2-step1").offset().top - 100;
  var content2Top =$(".content2-step2").offset().top-200;
  var content3Top =$(".content2-step3").offset().top-300;
  $(window).scroll(function () { 
    if($(document).scrollTop() >= content1Top){
      $(".content1 a:nth-child(1)").fadeIn();
    }
    if($(document).scrollTop() >= content1But){
      $(".content2-step1-ph a:nth-child(1)").fadeIn();
    }
    if($(document).scrollTop() >= content1But){
      $(".content2-step1-ph a:nth-child(2) img").fadeIn();
    }
    if($(document).scrollTop() >= content2Top){
      $(".content2-step2-ph a:nth-child(1) img").fadeIn();
    }
    if($(document).scrollTop() >= content2Top){
      $(".content2-step2-ph a:nth-child(2) img").fadeIn();
    }
    if($(document).scrollTop() >= content3Top){
      $(".content2-step3-ph a:nth-child(1)").fadeIn();
    }
    if($(document).scrollTop() >= content3Top){
      $(".content2-step3-ph a:nth-child(2) img").fadeIn();
    }
  });
  })