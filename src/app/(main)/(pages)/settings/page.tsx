import ProfileForm from "@/components/global/forms/profile-form";

type Props = {}

const Settings = (props: Props) => {
  return (
    <div className={"flex flex-co gap-4"}>
      <h1 className={"sticky top-0 z-[10] flex items-center justify-between border-b bg-background/50 p-6 text-4xl backdrop-blur-lg"}>
        <span>
          Settings
        </span>
      </h1>
      <div className={"flex flex-col gap-10 p-6"}>
        <div>
          <h2 className={"text-2xl font-bold"}>UserProfile</h2>
          <p className={"text-base text-white/50"}>
            Add or update your information
          </p>
        </div>
        <ProfileForm />
      </div>
    </div>
  )
}

export default Settings