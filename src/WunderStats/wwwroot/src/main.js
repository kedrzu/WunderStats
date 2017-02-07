export function configure(aurelia) {
    aurelia.use
        .basicConfiguration()
        .feature("src/ui")
        .feature("src/app");
    aurelia.start().then(a => {
        a.setRoot("src/app");
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsTUFBTSxvQkFBb0IsT0FBZ0I7SUFDdEMsT0FBTyxDQUFDLEdBQUc7U0FDTixrQkFBa0IsRUFBRTtTQUNwQixPQUFPLENBQUMsUUFBUSxDQUFDO1NBQ2pCLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUV4QixPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN6QixDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMifQ==