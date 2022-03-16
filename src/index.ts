import {
  validate,
  validateOrReject,
  Contains,
  Length,
  IsString,
  ValidateIf,
  ValidateBy,
} from "class-validator";
export class Post {
  constructor(title: string, text: string) {
    this.title = title;
    this.text = text;
  }
  @IsString()
  title: string;

  @ValidateIf((e) => e.title == "hi")
  @Contains("hello")
  text: string;
}

let post = new Post("hi", "this is great hello");

validate(post).then((errors) => {
  // errors is an array of validation errors
  if (errors.length > 0) {
    console.log("validation failed. errors: ", errors);
  } else {
    console.log("validation succeed");
  }
});

validateOrReject(post).catch((errors) => {
  console.log("Promise rejected (validation failed).: ", errors);
});
