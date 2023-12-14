      var print = prompt("Please enter Alphabet");
      if (print == "A" || print == "a") {
        printA();
        document.getElementById("plantax").innerText = printA;
      } else if (print == "B" || print == "b") {
        printB();
        document.getElementById("plantax").innerText = printB;
      } else if (print == "C" || print == "c") {
        printC();
        document.getElementById("plantax").innerText = printC;
      } else if (print == "D" || print == "d") {
        printD();
        document.getElementById("plantax").innerText = printD;
      } else if (print == "E" || print == "e") {
        printE();
        document.getElementById("plantax").innerText = printE;
      } else if (print == "F" || print == "f") {
        printF();
        document.getElementById("plantax").innerText = printF;
      } else if (print == "G" || print == "g") {
        printG();
        document.getElementById("plantax").innerText = printG;
      } else if (print == "H" || print == "h") {
        printH();
        document.getElementById("plantax").innerText = printH;
      } else if (print == "I" || print == "i") {
        printI();
        document.getElementById("plantax").innerText = printI;
      } else if (print == "J" || print == "j") {
        printJ();
        document.getElementById("plantax").innerText = printJ;
      } else if (print == "K" || print == "k") {
        printK();
        document.getElementById("plantax").innerText = printK;
      } else if (print == "L" || print == "l") {
        printL();
        document.getElementById("plantax").innerText = printL;
      } else if (print == "M" || print == "m") {
        printM();
        document.getElementById("plantax").innerText = printM;
      } else if (print == "N" || print == "n") {
        printN();
        document.getElementById("plantax").innerText = printN;
      } else if (print == "O" || print == "o") {
        printO();
        document.getElementById("plantax").innerText = printO;
      } else if (print == "P" || print == "p") {
        printP();
        document.getElementById("plantax").innerText = printP;
      } else if (print == "Q" || print == "q") {
        printQ();
        document.getElementById("plantax").innerText = printQ;
      } else if (print == "R" || print == "r") {
        printR();
        document.getElementById("plantax").innerText = printR;
      } else if (print == "S" || print == "s") {
        printS();
        document.getElementById("plantax").innerText = printS;
      } else {
        document.write(":- Please enter proper value sir :-");
      }

      function printA() {
        for (r = 1; r <= 5; r++) {
          for (c = 1; c <= 5; c++) {
            if (r == 1 || c == 5 || c == 1 || r == 3) {
              document.write("*");
            } else {
              document.write("&nbsp;&nbsp");
            }
          }
          document.write("<br>");
        }
      }
      function printB() {
        for (r = 1; r <= 5; r++) {
          for (c = 1; c <= 5; c++) {
            if (c == 1 || r == 1 || r == 5 || c == 5 || r == 3) {
              document.write("*");
            } else {
              document.write("&nbsp;&nbsp");
            }
          }
          document.write("<br>");
        }
      }

      function printC() {
        for (r = 1; r <= 5; r++) {
          for (c = 1; c <= 5; c++) {
            if (c == 1 || r == 1 || r == 5) {
              document.write("*");
            } else {
              document.write("&nbsp;&nbsp");
            }
          }
          document.write("<br>");
        }
      }

      function printD() {
        for (r = 1; r <= 5; r++) {
          for (c = 1; c <= 5; c++) {
            if (
              c == 1 ||
              (r == 1) & (c <= 4) ||
              (r == 5) & (c <= 4) ||
              (r >= 2) & (r <= 4) & (c == 5)
            ) {
              document.write("*");
            } else {
              document.write("&nbsp;&nbsp");
            }
          }
          document.write("<br>");
        }
      }

      function printE() {
        for (r = 1; r <= 5; r++) {
          for (c = 1; c <= 5; c++) {
            if (c == 1 || r == 1 || r == 3 || r == 5) {
              document.write("*");
            } else {
              document.write("&nbsp;&nbsp");
            }
          }
          document.write("<br>");
        }
      }
      function printF() {
        for (r = 1; r <= 5; r++) {
          for (c = 1; c <= 5; c++) {
            if (c == 1 || r == 1 || r == 3) {
              document.write("*");
            } else {
              document.write("&nbsp;&nbsp");
            }
          }
          document.write("<br>");
        }
      }
      function printG() {
        for (r = 1; r <= 5; r++) {
          for (c = 1; c <= 5; c++) {
            if (
              c == 1 ||
              r == 1 ||
              r == 5 ||
              (r == 3) & (c > 2) ||
              (r == 4) & (c > 4)
            ) {
              document.write("*");
            } else {
              document.write("&nbsp;&nbsp");
            }
          }
          document.write("<br>");
        }
      }
      function printH() {
        for (r = 1; r <= 5; r++) {
          for (c = 1; c <= 5; c++) {
            if (c == 1 || c == 5 || r == 3) {
              document.write("*");
            } else {
              document.write("&nbsp;&nbsp");
            }
          }
          document.write("<br>");
        }
      }
      function printI() {
        for (r = 1; r <= 5; r++) {
          for (c = 1; c <= 5; c++) {
            if (r == 1 || r == 5 || c == 3) {
              document.write("*");
            } else {
              document.write("&nbsp;&nbsp");
            }
          }
          document.write("<br>");
        }
      }
      function printJ() {
        for (r = 1; r <= 5; r++) {
          for (c = 1; c <= 5; c++) {
            if (
              r == 1 ||
              c == 4 ||
              (r == 5) & (c <= 4) ||
              (r == 4) & (c == 1)
            ) {
              document.write("*");
            } else {
              document.write("&nbsp;&nbsp");
            }
          }
          document.write("<br>");
        }
      }
      function printK() {
        for (r = 1; r <= 5; r++) {
          for (c = 1; c <= 5; c++) {
            if (
              c == 1 ||
              c + r == 5 ||
              (r == 4) & (c == 3) ||
              (r == 5) & (c == 5)
            ) {
              document.write("*");
            } else {
              document.write("&nbsp;&nbsp");
            }
          }
          document.write("<br>");
        }
      }
      function printL() {
        for (r = 1; r <= 5; r++) {
          for (c = 1; c <= 5; c++) {
            if (c == 1 || r == 5) {
              document.write("*");
            } else {
              document.write("&nbsp;&nbsp");
            }
          }
          document.write("<br>");
        }
      }
      function printM() {
        for (r = 1; r <= 5; r++) {
          for (c = 1; c <= 5; c++) {
            if (
              c == 1 ||
              c == 5 ||
              (c == r) & (r <= 3) ||
              (r + c == 6) & (r <= 3)
            ) {
              document.write("*");
            } else {
              document.write("&nbsp;&nbsp");
            }
          }
          document.write("<br>");
        }
      }
      function printN() {
        for (r = 1; r <= 5; r++) {
          for (c = 1; c <= 5; c++) {
            if (c == 1 || c == 5 || c == r) {
              document.write("*");
            } else {
              document.write("&nbsp;&nbsp");
            }
          }
          document.write("<br>");
        }
      }
      function printO() {
        for (r = 1; r <= 5; r++) {
          for (c = 1; c <= 5; c++) {
            if (
              (r == 1) & (c <= 4) & (c >= 2) ||
              (r == 5) & (c >= 2) & (c <= 4) ||
              (c == 1) & (r >= 2) & (r <= 4) ||
              (c == 5) & (r >= 2) & (r <= 4)
            ) {
              document.write("*");
            } else {
              document.write("&nbsp;&nbsp");
            }
          }
          document.write("<br>");
        }
      }
      function printP() {
        for (r = 1; r <= 5; r++) {
          for (c = 1; c <= 5; c++) {
            if (c == 1 || r == 1 || r == 3 || (r == 2) & (c > 4)) {
              document.write("*");
            } else {
              document.write("&nbsp;&nbsp");
            }
          }
          document.write("<br>");
        }
      }
      function printQ() {
        for (r = 1; r <= 6; r++) {
          for (c = 1; c <= 6; c++) {
            if (
              (r == 1) & (c <= 5) ||
              (r == 5) & (c <= 5) ||
              (c == 1) & (r <= 5) ||
              (c == 5) & (r <= 5) ||
              (r == c) & (r > 2)
            ) {
              document.write("*");
            } else {
              document.write("&nbsp;&nbsp");
            }
          }
          document.write("<br>");
        }
      }
      function printR() {
        for (r = 1; r <= 5; r++) {
          for (c = 1; c <= 5; c++) {
            if (
              c == 1 ||
              r == 1 ||
              r == 3 ||
              (r == 2) & (c > 4) ||
              (r == 4) & (c == 3) ||
              (r == 5) & (c == 5)
            ) {
              document.write("*");
            } else {
              document.write("&nbsp;&nbsp");
            }
          }
          document.write("<br>");
        }
      }
      function printS() {
        for (r = 1; r <= 5; r++) {
          for (c = 1; c <= 5; c++) {
            if (
              r == 1 ||
              r == 3 ||
              (c == 1) & (r <= 3) ||
              r == 5 ||
              (r == 4) & (c > 4)
            ) {
              document.write("*");
            } else {
              document.write("&nbsp;&nbsp");
            }
          }
          document.write("<br>");
        }
      }
