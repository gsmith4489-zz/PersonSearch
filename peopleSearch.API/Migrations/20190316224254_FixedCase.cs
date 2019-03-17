using Microsoft.EntityFrameworkCore.Migrations;

namespace peopleSearch.API.Migrations
{
    public partial class FixedCase : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "LastName",
                table: "Persons",
                newName: "Lastname");

            migrationBuilder.RenameColumn(
                name: "FirstName",
                table: "Persons",
                newName: "Firstname");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Lastname",
                table: "Persons",
                newName: "LastName");

            migrationBuilder.RenameColumn(
                name: "Firstname",
                table: "Persons",
                newName: "FirstName");
        }
    }
}
