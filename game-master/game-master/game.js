
                var map=[
                    [-1,1,0,0,1,1,0,1,1,1],
                    [1,1,0,1,1,1,1,1,0,1],
                    [0,1,0,1,1,0,0,0,1,1],
                    [0,1,1,1,1,1,1,1,1,1],
                    [1,1,0,0,10,0,1,0,0,1],
                    [1,1,1,1,1,0,0,1,0,1],
                    [1,1,0,0,1,1,0,1,0,1],
                    [0,1,1,1,1,1,1,1,1,1],
                    [0,1,1,1,0,0,1,1,1,1],
                    [0,1,0,1,1,1,0,1,0,1]
                ]
                var Score=1;
                var snd = new Audio("pacman_eatghost.wav"); 
                var snd2=new Audio("pacman_death.wav");
                var HighScore=1;
                var curr={
                    x:0,
                    y:0
                }
                function displayScore(){
                    if(map[curr.x][curr.y] === 1){
                    Score=Score+1;
                    }
                    if(Score>HighScore){
                        HighScore=Score;
                    }
                }
                function drawGameBoard(map){
                    document.getElementById("row").innerHTML="";
                    for(var x=0;x<map.length;x=x+1){
                        for(var y=0;y<map[x].length;y=y+1){
                            console.log(map[x][y]);
                            if(map[x][y] === 1){
                                document.getElementById('row').innerHTML+="<div class='dot'></div>";
                            }
                            else if(map[x][y] === 0){
                                document.getElementById('row').innerHTML+="<div class='block'></div>";
                            }
                            else if(map[x][y] === -1){
                                document.getElementById('row').innerHTML+="<div class='user'></div>";
                            }
                            else if(map[x][y]=== 3){
                                document.getElementById('row').innerHTML+="<div class='blank'></div>";
                            }
                            else if(map[x][y]=== 10){
                                document.getElementById('row').innerHTML+="<div class='dotblue'></div>"
                            }
                        }
                        document.getElementById('row').innerHTML+="<br>";
                    }
                   
                    document.getElementById('Score').innerHTML="<div class='Score'>SCORE:</div>"+Score;
                    document.getElementById('HighScore').innerHTML="<div class='HighScore'>HIGHSCORE:</div>"+HighScore;
                }
                drawGameBoard(map);
                document.onkeydown= function(e){  
                if (e.keyCode == 37) {
                   // bottom
                   if(map[curr.x][curr.y-1]!==0 && map[curr.x][curr.y-1]<map.length){
                    if(map[curr.x][curr.y-1]===10){
                        displayScore();
                        snd2.play();
                        alert("GAME OVER");
                        newdrawGameBoard();
                        
                    }
                        map[curr.x][curr.y]=3;
                        curr.y=curr.y-1;
                        displayScore();
                        map[curr.x][curr.y]=-1;
                        snd.play();
                        drawGameBoard(map);
                   }
                    else{
                        displayScore();
                        snd2.play();
                        alert("GAME OVER");
                        newdrawGameBoard();
                       

                    }
                }
                else if (e.keyCode== 39 ) {
                        //up
                        if(map[curr.x][curr.y+1]!==0 && map[curr.x][curr.y+1]<map.length){
                            if(map[curr.x][curr.y+1]===10){
                                displayScore();
                                snd2.play();
                                alert("GAME OVER");
                                newdrawGameBoard();
                                
                            }
                        map[curr.x][curr.y]=3;
                        curr.y=curr.y+1;
                        displayScore();
                        map[curr.x][curr.y]=-1;
                        snd.play();
                        drawGameBoard(map);
                        }
                        else{
                            displayScore();
                            snd2.play();
                            alert("GAME OVER");
                            newdrawGameBoard();
                            
                        }
                     }
                else if (e.keyCode== 40) { 
                        //right
                        if(map[curr.x+1][curr.y]!==0 && map[curr.x +1][curr.y]<map.length){
                            if(map[curr.x+1][curr.y]===10){
                                displayScore();
                                snd2.play();
                                alert("GAME OVER");
                                newdrawGameBoard();
                                
                            }
                        map[curr.x][curr.y]=3;
                        curr.x=curr.x+1;
                        displayScore();
                        map[curr.x][curr.y]=-1;
                        snd.play();
                        drawGameBoard(map);
                        
                        }
                        else{
                            displayScore();
                            snd2.play();
                            alert("GAME OVER");
                            newdrawGameBoard();
                            
                           
                        }
                    }
                else if (e.keyCode== 38) { 
                   //left
                        if(map[curr.x-1][curr.y]!==0 && map[curr.x-1][curr.y]<map.length){
                            if(map[curr.x-1][curr.y]===10){
                                displayScore();
                                snd2.play();
                                alert("GAME OVER");
                                newdrawGameBoard();
                                
                            }
                        map[curr.x][curr.y]=3;
                        curr.x=curr.x-1;
                        displayScore();
                        map[curr.x][curr.y]=-1;
                        snd.play();
                        drawGameBoard(map);
                        
                        }
                        else{
                            displayScore();
                            snd2.play();
                            alert("GAME OVER");
                            newdrawGameBoard();
                            
                            
                        }
                    }
                }
                function newdrawGameBoard(){
                     map=[
                        [-1,1,0,0,1,1,0,1,1,1],
                        [1,1,0,1,1,1,1,1,0,1],
                        [0,1,0,1,1,0,0,0,1,1],
                        [0,1,1,1,1,1,1,1,1,1],
                        [1,1,0,0,10,0,1,0,0,1],
                        [1,1,1,1,1,0,0,1,0,1],
                        [1,1,0,0,1,1,0,1,0,1],
                        [0,1,1,1,1,1,1,1,1,1],
                        [0,1,1,1,0,0,1,1,1,1],
                        [0,1,0,1,1,1,0,1,0,1]
                    ]
                    curr={
                        x:0,
                        y:0
                    }
                    Score=0;
                    map=shuffle(map);
                    drawGameBoard(map);
                }
                function shuffle(map){
                    var len=map.length;
                    var temp;
                    var index1;
                    var index2;
                    var no=len*(len+1);
                    while(no>0){
                        index1=Math.floor(Math.random()*(len));
                        index2=Math.floor(Math.random()*(len+1));
                        no=no-2;
                        
                        // if(index1===0 && index2===0){
                        //     map[0][0]=-1;
                        // }
                        if((map[index1][index2]===1 || map[index1][index2]===0)){
                            var c=0;
                          if(index1>0 && index1<map.length-1 && index2>0 && index2<map.length-1){
                        //      if(map[index1][index2-1]+map[index1+1][index2-1]+map[index1-1][index2-1]===3){
                        //          c=1;
                        //      }
                        //      if(map[index1][index2+1]+map[index1-1][index2+1]+map[index1+1][index2+1]===3){
                        //          c=1;
                        //      }
                        //      else if(map[index1+1][index2]+map[index1+1][index2-1]+map[index1+1][index2+1]===3){
                        //          c=1;
                        //      }
                        //      else if(map[index1-1][index2]+map[index1-1][index2+1]+map[index1-1][index2-1]===3){
                        //          c=1;
                        //      }
                        //      else if(map[index1][index2-1]+map[index1-1][index2+1]+map[index1+1][index2]===3){
                        //          c=1;
                        //      }
                        //     else if(map[index1][index2-1]+map[index1-1][index2]+map[index1-1][index2-1]===3){
                        //          c=1;
                        //     }
                        //     else if(map[index1-1][index2]+map[index1-1][index2+1]+map[index1][index2+1]===3){
                        //          c=1;
                        //     }
                        //     else if(map[index1+1][index2]+map[index1+1][index2+1]+map[index1][index2-1]===3){
                        //      c=1;
                        //     }
                                 c=c+map[index1-1][index2];
                                 c=c+map[index1+1][index2];
                                 c=c+map[index1][index2-1];
                                 c=c+map[index1][index2+1];
                                 c=c+map[index1-1][index2-1];
                                 c=c+map[index1+1][index2+1];
                                 c=c+map[index1-1][index2+1];
                                 c=c+map[index1+1][index2-1];
                        
                           if(c>=5){
                                temp=map[index1][index2];
                                map[index1][index2]=map[index2][index1];
                                map[index2][index1]=temp;
                           }
                            }   
                        }
                    }
                    return map;
                }
    