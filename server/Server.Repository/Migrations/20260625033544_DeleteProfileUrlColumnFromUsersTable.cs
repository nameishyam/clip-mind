using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Server.Repository.Migrations
{
    /// <inheritdoc />
    public partial class DeleteProfileUrlColumnFromUsersTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ProfileUrl",
                table: "Users");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ProfileUrl",
                table: "Users",
                type: "text",
                nullable: true);
        }
    }
}
