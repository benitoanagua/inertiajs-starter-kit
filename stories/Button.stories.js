import BreezeButton from "@/Components/Button.vue";

export default {
    title: "Example/Button",
    component: { BreezeButton },
};

const Template = (args) => ({
    components: { BreezeButton },
    setup() {
        return { ...args };
    },
    template: `
      <BreezeButton class="uppercase">
        {{ title }}
      </BreezeButton>
     `,
});

export const Default = Template.bind({});
Default.args = {
    title: "my button",
};
