using Microsoft.EntityFrameworkCore.Migrations;

namespace peopleSearch.API.Migrations
{
    public partial class AddedPicUrl : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "DOB",
                table: "Persons",
                newName: "dob");

            migrationBuilder.AddColumn<string>(
                name: "PhotoUrl",
                table: "Persons",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PhotoUrl",
                table: "Persons");

            migrationBuilder.RenameColumn(
                name: "dob",
                table: "Persons",
                newName: "DOB");
        }
    }
}
