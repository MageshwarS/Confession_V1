import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'project-confess';
  floatingEmojis: string[] = ['❤️', '💌', '💖', '💘', '🏹', '💞', '❤️', '🏹','💌', '💖','💘'];
  yesButtons: { id: number, top: string, left: string }[] = [];
  warningMsg = false;
  private buttonId = 0;
  nthClick = 0;
  titleOfLetter : string = 'A Love Letter💌';
  from : string = 'Maggie';
  to : string = 'Sapheera❤️';
  letter : string = 'Reminder: I Love You and Think about You every Single day.';
  letter2 : string = 'I really Wish We could be there for each other and spend more Time Together Everyday in Future.';
  question : string = 'Shall We?👉🏽👈🏽❤️'
  yesMsg : string = 'Yes🤍';
  noMsg : string = 'Naah🤔';

  @ViewChild('miniContainer', { static: false }) miniContainer!: ElementRef;

  onYesClick() {
    // Simulate sending an email (you would implement backend service here)
    window.location.href = "mailto:s.mageshwar01@gmail.com??subject=Confess&body=YES!";
    alert('I Knew. Apo ithu love thaana Jessi? ❤️;)');
  }

  onMaybeLaterClick() {
    this.warningMsg = true;
    // Add 3 new "Yes" buttons with random positions
    var dist = 1;
    this.nthClick = this.nthClick +1;
    if (this.nthClick < 3) {
      dist = 250;
    }else if(this.nthClick < 6){
      dist = 100;
    }else{
      dist = 15;
    }
    const rect = this.miniContainer.nativeElement.getBoundingClientRect();
    for (let i = 0; i < 3; i++) {

      const randomOffsetX = Math.random() * (rect.width - dist); // Ensure buttons fit within container
        const randomOffsetY = Math.random() * (rect.height + dist );

      this.yesButtons.push({
        id: this.buttonId++,
        top: `${Math.random() * randomOffsetY}%`,
        left: `${Math.random() * randomOffsetX}%`
      });
    }
  }
}
