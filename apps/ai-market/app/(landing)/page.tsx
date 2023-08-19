import { Button } from "../../components/ui/button";
import Link from "next/link";

const Landingpage = () => {
  return (
    <div>
      Landing page!! (Unprotected)
      <Link href="/sign-in">
        <div>
          <Button>Sign in</Button>
        </div>
      </Link>
      <Link href="/sign-up">
        <div>
          <Button>Register</Button>
        </div>
      </Link>
    </div>
  );
};

export default Landingpage;
