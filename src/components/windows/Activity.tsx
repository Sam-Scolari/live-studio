import Section from "../Section";

export default function Activity() {
  return (
    <Section name="Details">
      <div class="flex gap-2">
        <div class="bg-grey text-lightgrey flex items-center gap-2 text-sm font-medium px-2 py-1 rounded-md">
          Goal
          <img src="/icons/add.svg" />
        </div>
        <div class="bg-grey text-lightgrey flex items-center gap-2 text-sm font-medium px-2 py-1 rounded-md">
          Clip
          <img src="/icons/add.svg" />
        </div>
      </div>
    </Section>
  );
}
