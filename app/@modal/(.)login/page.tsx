import SignIn from "@/components/sign-in";
import { Modal } from "./modal";

export default function LoginModalPage() {
  return (
    <Modal>
      <SignIn modal={true} />
    </Modal>
  );
}
