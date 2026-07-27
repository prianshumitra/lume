"""add user table

Revision ID: c8440595425c
Revises: 79c0b61fee79
Create Date: 2026-07-25 17:24:13.637508

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'c8440595425c'
down_revision: Union[str, Sequence[str], None] = '79c0b61fee79'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Upgrade schema."""
    op.create_table("users",
                    sa.Column("id", sa.Integer(),nullable=False),
                    sa.Column("email", sa.String(),nullable=False,unique=True),
                    sa.Column("password", sa.String(),nullable=False),
                    sa.Column("created_at", sa.TIMESTAMP(timezone=True),nullable=False,server_default=sa.text('now()')),
                    sa.PrimaryKeyConstraint("id"),
                    sa.UniqueConstraint("email"))


def downgrade() -> None:
    """Downgrade schema."""
    op.drop_table("users")
    pass
