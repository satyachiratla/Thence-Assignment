import Accordion from "./UI/Accordion";

export default function FAQs() {
  return (
    <div className="bg-[#E8EEE7] p-10 rounded-3xl mt-20 flex">
      <div className="w-1/2">
        <h2 className="font-coveredByYourGrace font-medium text-2xl text-[#9E9D9D]">
          What's on your mind
        </h2>
        <h2 className="font-bold text-4xl">Ask Questions</h2>
      </div>
      <div className="w-1/2 space-y-4">
        <Accordion
          question="Do you offer freelancers?"
          answer="Yes, our company offers freelance opportunities for individuals looking to work independently on various projects and assignments."
        />
        <Accordion
          question="What’s the guarantee that I will be satisfied with the hired talent?"
          answer="We strive to ensure satisfaction by carefully matching talents to your needs and offering support throughout the project."
        />
        <Accordion
          question="Can I hire multiple talents at once?"
          answer="If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution."
        />
        <Accordion
          question="Why should I not go to an agency directly?"
          answer="Choosing us ensures personalized attention, competitive rates, and direct communication with talents, enhancing flexibility and project customization."
        />
        <Accordion
          question="Who can help me pick a right skillset and duration for me?"
          answer="Our experienced team can assist in selecting the ideal skillset and duration tailored to your project requirements and goals."
        />
      </div>
    </div>
  );
}
