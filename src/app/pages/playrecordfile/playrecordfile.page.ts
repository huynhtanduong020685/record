import { Component, OnInit} from '@angular/core';
import { LoadingController,NavController} from '@ionic/angular';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { ChangeDetectorRef } from '@angular/core';
import { Storage } from '@ionic/storage';

import { File } from '@ionic-native/file/ngx';

declare var webkitSpeechRecognition: any;
const MEDIA_FILES_KEY = 'mediaFiles';

@Component({
  selector: 'app-playrecordfile',
  templateUrl: './playrecordfile.page.html',
  styleUrls: ['./playrecordfile.page.scss']
})
export class PlayrecordfilePage implements OnInit {

  // Declares the required variables before the constructor.
    alive: boolean;
    files: File[] = [];
    mediaFiles = [];
    matches: string[] = [];
    isRecording = false;
    isWebSpeechRecording = false;

    public buttonClicked: boolean = false; 
    //Whatever you want to initialise it as
    //Inject to the constructor.

    constructor(
    public navCtrl: NavController, 
    private speechRecognition: SpeechRecognition, 
    // private platform: Platform,
    private cd: ChangeDetectorRef,
    private  loadingCtrl: LoadingController,
    private storage:Storage,
    private file:File
    ) { }

    public onButtonClick() {
      this.buttonClicked = !this.buttonClicked;
    }

    audiorecording(){
          this.matches = [];
          let options = {
          language: 'en-US'
          }
          this.speechRecognition.startListening(options).subscribe(matches => {
            this.matches = matches;
            this.cd.detectChanges();
          });
          this.isRecording = true;

    }
    
    stopRecording() {
      this.speechRecognition.stopListening().then(() => {
        this.isRecording = false;
      });
    }
    playrecording(){
      

    }
  ngOnInit() {
  }

}
