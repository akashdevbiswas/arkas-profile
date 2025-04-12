import { Button } from "@/components";
import constants from "@/constants";

export default async function page({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const { blogId } = await params;

  const { blogs } = constants;

  const blog = blogs[+blogId] ? blogs[+blogId] : undefined;

  if (!blog) {
    return (
      <div className="mx-auto main__container flex-col flex items-center gap-8">
        <div className="mt-[300px] text-4xl font-outfit font-bold mx-auto text-center">
          Blog not found
        </div>

        <Button
          btnType="primary"
          buttonName={"Go back"}
          className="w-[181px]"
          url="/"
        />
      </div>
    );
  }

  const { title, writerName, writing } = blog;

  return (
    <div className="mt-[100px] w-[60%] h-auto bg-[#F8D0A9] mx-auto font-outfit mb-[160px] py-[59px]">
      <h1 className="w-fit mx-auto text-5xl">{title}</h1>
      <h2 className="w-fit mx-auto text-4xl mt-1">by {writerName}</h2>
      <div className="mt-4 flex flex-col gap-8">
        {writing.map((phrase, index) => (
          <div className="w-fit mx-auto" key={index}>
            {phrase.split("\n").map((line, ind) => (
              <p className="text-xl text-center" key={ind}>
                {line}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
