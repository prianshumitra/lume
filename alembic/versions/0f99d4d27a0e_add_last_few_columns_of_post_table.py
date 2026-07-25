"""add last few columns of post table

Revision ID: 0f99d4d27a0e
Revises: e3b3aa93397c
Create Date: 2026-07-25 17:48:42.610561

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '0f99d4d27a0e'
down_revision: Union[str, Sequence[str], None] = 'e3b3aa93397c'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Upgrade schema."""
    op.add_column('posts', sa.Column('published', sa.Boolean(),nullable=False,server_default='TRUE'))
    op.add_column('posts',sa.Column('created_at', sa.TIMESTAMP(timezone=True),nullable=False,server_default=sa.text('now()')))
    pass


def downgrade() -> None:
    """Downgrade schema."""
    op.drop_column('posts', 'created_at')
    op.drop_column('posts', 'published')
    pass
