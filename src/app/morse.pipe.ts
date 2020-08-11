import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'morse'
})
export class MorsePipe implements PipeTransform {

  transform(value: string): string {
    let builder: string = "";
    for (var i = 0; i < value.length; i++) {
      switch (value[i].toUpperCase()) {
        case "A":
          builder += ".-";
          break;
        case "B":
          builder += "-...";
          break;
        case "C":
          builder += "-.-.";
          break;
        case "D":
          builder += "-..";
          break;
        case "E":
          builder += ".";
          break;
        case "F":
          builder += "..-.";
          break;
        case "G":
          builder += "--.";
          break;
        case "H":
          builder += "....";
          break;
        case "I":
          builder += "..";
          break;
        case "J":
          builder += ".---";
          break;
        case "K":
          builder += "-.-";
          break;
        case "L":
          builder += ".-..";
          break;
        case "N":
          builder += "-.";
          break;
        case "M":
          builder += "--";
          break;
        case "O":
          builder += "---";
          break;
        case "P":
          builder += ".--.";
          break;
        case "Q":
          builder += "--.-";
          break;
        case "R":
          builder += ".-.";
          break;
        case "S":
          builder += "...";
          break;
        case "T":
          builder += "-";
          break;
        case "U":
          builder += "..-";
          break;
        case "V":
          builder += "...-";
          break;
        case "W":
          builder += ".--";
          break;
        case "X":
          builder += "-..-";
          break;
        case "Y":
          builder += "-.--";
          break;
        case "Z":
          builder += "--..";
          break;
        case "Æ":
          builder += ".-.-";
          break;
        case "Ø":
          builder += "---.";
          break;
        case "Å":
          builder += ".--.-";
          break;
        case "1":
          builder += ".----";
          break;
        case "2":
          builder += "..--";
          break;
        case "3":
          builder += "...--";
          break;
        case "4":
          builder += "....-";
          break;
        case "5":
          builder += ".....";
          break;
        case "6":
          builder += "-....";
          break;
        case "7":
          builder += "--...";
          break;
        case "8":
          builder += "---..";
          break;
        case "9":
          builder += "----.";
          break;
        case "0":
          builder += "-----";
          break;
        case ".":
          builder += ".-.-.-";
          break;
        case ",":
          builder += "--..--";
          break;
        case ":":
          builder += "---...";
          break;
        case "?":
          builder += "..--..";
          break;
        case "'":
          builder += ".----.";
          break;
        case "-":
          builder += "-....-";
          break;
        case "/":
          builder += "-..-.";
          break;
        case "(":
          builder += "-.--.";
          break;
        case ")":
          builder += "-.--.-";
          break;
        case "\"":
          builder += ".-..-.";
          break;
        case "\n":
          builder += ".-.-";
          break;
        case "*":
          builder += "-..-";
          break;
        case "@":
          builder += ".--.-.";
          break;
        default:
          break;
      }
    }
    return builder;
  }

}
