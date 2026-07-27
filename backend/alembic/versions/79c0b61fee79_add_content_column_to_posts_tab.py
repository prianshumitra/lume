"""add content column to posts tab

Revision ID: 79c0b61fee79
Revises: ffaf4d44525e
Create Date: 2026-07-25 16:59:53.636292

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '79c0b61fee79'
down_revision: Union[str, Sequence[str], None] = 'ffaf4d44525e'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Upgrade schema."""
    op.add_column('posts', sa.Column('content', sa.String(), nullable=False))
    pass


def downgrade() -> None:
    """Downgrade schema."""
    op.drop_column('posts', 'content')
    pass
