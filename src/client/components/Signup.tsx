import { Mail } from "lucide-react";

export const Signup = () => {
  return (
    <div className="join">
      <div>
        <label className="input validator join-item">
          <Mail className="text-neutral-content" />
          <input type="email" placeholder="mail@site.com" required />
        </label>
        <div className="validator-hint hidden">Enter valid email address</div>
      </div>
      <button className="btn btn-neutral join-item">Join</button>
    </div>
  );
};
