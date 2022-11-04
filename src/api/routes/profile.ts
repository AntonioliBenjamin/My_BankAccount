import * as express from "express";
import { Request, Response } from "express";
import { InMemoryProfileRepository } from "../../adapters/repositories/InMemoryProfileRepository";
import { Profile } from "../../core/entities/Profile";
const userRouter = express.Router();
const profileRepository = new InMemoryProfileRepository();
import { v4 as uuidv4 } from "uuid";

userRouter.post("/", (req: Request, res: Response) => {
    const body = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
    };
  
    const userId = uuidv4();
  
    const isProfileExist = profileRepository.exist(body.email, body.phoneNumber);
    if (isProfileExist) {
      return res.status(400).send({
        message: "Profile already registered !",
      });
    }
  
    const user = new Profile({
      firstName: body.firstName.toLowerCase().trim(),
      lastName: body.lastName.toLowerCase().trim(),
      email: body.email.toLowerCase().trim(),
      phoneNumber: body.phoneNumber.trim(),
      userId: userId,
    });
  
    profileRepository.save(user.props);
  
    return res.status(200).send({
      firstName: user.props.firstName,
      lastName: user.props.lastName,
      email: user.props.email,
      phoneNumber: user.props.phoneNumber,
      userId: user.props.userId,
    });
  });

  export { userRouter } 

  //ok