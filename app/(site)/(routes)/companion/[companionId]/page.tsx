import { CompanionForm } from "@/app/(site)/(routes)/companion/[companionId]/components/companion-form";
import prismadb from "@/lib/prismadb";
import { auth, redirectToSignIn } from "@clerk/nextjs";

interface CompanionPageProps {
  params: {
    companionId: string;
  };
}

const CompanionPage = async ({ params }: CompanionPageProps) => {
  const {userId} = auth();

  if(!userId) {
    return redirectToSignIn();
  }

  const companion = await prismadb.companion.findUnique({
    where: {
      id: params.companionId,
      userId
    },
  });
  const categories = await prismadb.category.findMany();
  return (
    <CompanionForm initialData={companion} categories={categories}/>
  );
};

export default CompanionPage;
