/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ListingUpdateManyWithoutWishlistsInput } from "./ListingUpdateManyWithoutWishlistsInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { UserUpdateManyWithoutWishlistsInput } from "./UserUpdateManyWithoutWishlistsInput";

@InputType()
class WishlistUpdateInput {
  @ApiProperty({
    required: false,
    type: () => ListingUpdateManyWithoutWishlistsInput,
  })
  @ValidateNested()
  @Type(() => ListingUpdateManyWithoutWishlistsInput)
  @IsOptional()
  @Field(() => ListingUpdateManyWithoutWishlistsInput, {
    nullable: true,
  })
  listing?: ListingUpdateManyWithoutWishlistsInput;

  @ApiProperty({
    required: false,
    type: () => UserUpdateManyWithoutWishlistsInput,
  })
  @ValidateNested()
  @Type(() => UserUpdateManyWithoutWishlistsInput)
  @IsOptional()
  @Field(() => UserUpdateManyWithoutWishlistsInput, {
    nullable: true,
  })
  user?: UserUpdateManyWithoutWishlistsInput;
}

export { WishlistUpdateInput as WishlistUpdateInput };
