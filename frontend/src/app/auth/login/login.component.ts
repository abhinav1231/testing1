import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

// App imports
import { AuthService } from '../auth_service/auth.service';
import { User } from '../user';
import { CustomValidator } from '../shared/validation';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();

  error: any;
  returnUrl: string;
  loginForm: FormGroup;
  isLoading = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastrService: ToastrService,
    private fb: FormBuilder,
    private spinnerService: Ng4LoadingSpinnerService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    //  Set the return url
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.loginForm = this.fb.group({
          emailInput: ['', [Validators.required]],
          passwordInput: ['', [Validators.required]]
       });
  }

  onSubmit(loginForm): void {

    const postData = this.loginForm.value;
    console.log('postData=====>>>', postData );
    this.authService.onLogin(this.user).subscribe(
      (response) => {
        // get return url from route parameters or default to '/'
        this.router.navigate([this.returnUrl]);
      },
      (error) => {
        this.error = error.error;
      }
    );
    // Clear form fields
  }

  // }

}
